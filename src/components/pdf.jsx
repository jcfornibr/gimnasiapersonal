import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '2 solid #007bff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007bff',
    marginTop: 15,
    marginBottom: 10,
    padding: 8,
  },
  subsectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0056b3',
    marginTop: 12,
    marginBottom: 8,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#333333',
    marginBottom: 6,
  },
  boldText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
  },
  exerciseItem: {
    marginBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#f8f9fa',
    borderLeft: '3 solid #28a745',
  },
  exerciseName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 10,
    color: '#555',
    lineHeight: 1.5,
  },
  table: {
    marginTop: 10,
    marginBottom: 10,
    border: '1 solid #bbb',
    borderRadius: 3,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableRowEven: {
    backgroundColor: '#f9f9f9',
  },
  tableCell: {
    flex: 1,
    padding: 6,
    borderRight: '1 solid #bbb',
    borderBottom: '1 solid #bbb',
    fontSize: 10,
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    fontSize: 11,
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTop: '1 solid #dddddd',
    textAlign: 'center',
    fontSize: 9,
    color: '#999999',
  },
});

// Function to parse markdown and clean formatting
const parseMarkdownLine = (line) => {
  if (!line) return null;

  // Table row detection (Markdown pipe table)
  // A table row starts and ends with a pipe and has at least one pipe inside.
  const tableMatch = line.trim().match(/^\|.*\|$/);
  if (tableMatch) {
    // Split on pipes, discard leading/trailing empty strings
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());

    // Determine if this is a separator row ("|:----|----:|")
    const isSeparator = cells.every((c) => /^:?-+:?$/.test(c));
    if (isSeparator) {
      return { type: 'tableSeparator' };
    }

    return { type: 'tableRow', cells };
  }

  // Count leading # for heading level
  const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const text = headingMatch[2].replace(/\*/g, ''); // Remove asterisks
    return { type: 'heading', level, text };
  }

  // Fallback: treat as plain text
  return { type: 'text', text: line };
};

// Helper to render inline markdown-like styles inside a text string
const renderInlineText = (text) => {
  // strip leftover single asterisks
  let clean = text.replace(/\*(?!\*)([^*]+)\*(?!\*)/g, '$1');

  // split by bold markers ** **
  const parts = [];
  let remaining = clean;
  const boldRegex = /\*\*(.+?)\*\*/;

  while (true) {
    const match = remaining.match(boldRegex);
    if (!match) break;
    const [full, inner] = match;
    const index = remaining.indexOf(full);
    if (index > 0) {
      parts.push(<Text key={parts.length}>{remaining.slice(0, index)}</Text>);
    }
    parts.push(
      <Text key={parts.length} style={styles.boldText}>
        {inner}
      </Text>
    );
    remaining = remaining.slice(index + full.length);
  }
  if (remaining) parts.push(<Text key={parts.length}>{remaining}</Text>);
  return parts;
};

// Function to render content based on parsed markdown
const renderContent = (line, index) => {
  const parsed = parseMarkdownLine(line);
  
  if (!parsed || !parsed.text.trim()) return null;

  const text = parsed.text.replace(/\*/g, '').trim(); // Remove asterisks from headings/text

  switch (parsed.type) {
    case 'heading':
      if (parsed.level === 1) {
        return (
          <Text key={index} style={styles.mainTitle}>
            {text}
          </Text>
        );
      } else if (parsed.level === 2) {
        return (
          <Text key={index} style={styles.sectionTitle}>
            {text}
          </Text>
        );
      } else if (parsed.level === 3) {
        return (
          <Text key={index} style={styles.subsectionTitle}>
            {text}
          </Text>
        );
      }
      return (
        <Text key={index} style={styles.text}>
          {text}
        </Text>
      );
    case 'tableRow':
      return (
        <View key={index} style={styles.tableRow}>
          {parsed.cells.map((cell, cellIndex) => (
            <Text
              key={cellIndex}
              style={[styles.tableCell, index === 0 ? styles.tableHeader : {}]}
            >
              {renderInlineText(cell)}
            </Text>
          ))}
        </View>
      );
    case 'text':
      return (
        <Text key={index} style={styles.text}>
          {text}
        </Text>
      );
    default:
      return null;
  }
};

// Create Document Component
export const MyDocumentPDF = ({ rutina }) => {
  // Split the rutina into lines and parse each one
  const lines = rutina.split('\n').filter(line => line.trim());

  // Group table rows
  const content = [];
  let tableRows = [];
  let inTable = false;

  lines.forEach((line, index) => {
    const parsed = parseMarkdownLine(line);
    if (!parsed) return;

    if (parsed.type === 'tableRow') {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(parsed);
    } else if (parsed.type === 'tableSeparator') {
      // separator row just indicates alignment and belongs to current table
      // do not output it, but ensure we are in table mode so later rows join
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
    } else {
      if (inTable) {
        content.push({ type: 'table', rows: tableRows });
        inTable = false;
        tableRows = [];
      }
      content.push({ ...parsed, index });
    }
  });

  if (inTable) {
    content.push({ type: 'table', rows: tableRows });
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {content.map((item, index) => {
            if (item.type === 'table') {
              return (
                <View key={index} style={styles.table}>
                  {item.rows.map((row, rowIndex) => (
                    <View
                      key={rowIndex}
                      style={[
                        styles.tableRow,
                        rowIndex % 2 === 1 ? styles.tableRowEven : {},
                      ]}
                    >
                      {row.cells.map((cell, cellIndex) => (
                        <Text
                          key={cellIndex}
                          style={[
                            styles.tableCell,
                            rowIndex === 0 ? styles.tableHeader : {},
                          ]}
                        >
                          {cell}
                        </Text>
                      ))}
                    </View>
                  ))}
                </View>
              );
            } else {
              return renderContent(item.text, item.index);
            }
          })}
        </View>
        <View style={styles.footer}>
          <Text>Rutina personalizada - GimnasIA</Text>
        </View>
      </Page>
    </Document>
  );
};