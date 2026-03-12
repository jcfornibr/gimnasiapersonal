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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 15,
    paddingBottom: 12,
    borderBottom: '3 solid #dc2626',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#dc2626',
    marginTop: 20,
    marginBottom: 12,
    padding: 10,
    paddingLeft: 15,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#dc2626',
    marginTop: 15,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '1 solid #fca5a5',
  },
  text: {
    fontSize: 11,
    lineHeight: 1.8,
    color: '#1f2937',
    marginBottom: 6,
  },
  boldText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  exerciseItem: {
    marginBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fef2f2',
    borderLeft: '4 solid #dc2626',
    borderRadius: 4,
  },
  exerciseName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 5,
  },
  exerciseDetails: {
    fontSize: 10,
    color: '#6b7280',
    lineHeight: 1.6,
  },
  table: {
    marginTop: 12,
    marginBottom: 15,
    border: '2 solid #dc2626',
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableRowEven: {
    backgroundColor: '#fef2f2',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRight: '1 solid #fca5a5',
    borderBottom: '1 solid #fca5a5',
    fontSize: 10,
    color: '#374151',
  },
  tableHeader: {
    backgroundColor: '#dc2626',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 11,
    padding: 10,
  },
  header: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottom: '2 solid #dc2626',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#dc2626',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoCard: {
    backgroundColor: '#fef2f2',
    padding: 12,
    marginBottom: 15,
    borderLeft: '3 solid #dc2626',
  },
  infoLabel: {
    fontSize: 9,
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 11,
    color: '#1f2937',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    paddingTop: 15,
    borderTop: '1 solid #e5e7eb',
    textAlign: 'center',
    fontSize: 9,
    color: '#9ca3af',
  },
  motivationalQuote: {
    backgroundColor: '#fef2f2',
    padding: 15,
    marginTop: 20,
    marginBottom: 15,
    borderLeft: '3 dashed #dc2626',
    borderRight: '3 dashed #dc2626',
  },
  quoteText: {
    fontSize: 11,
    color: '#dc2626',
    fontStyle: 'italic',
    textAlign: 'center',
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
  
  if (!parsed) return null;

  // Handle table rows separately
  if (parsed.type === 'tableRow' || parsed.type === 'tableSeparator') {
    return null; // Tables are handled in the main render
  }

  if (!parsed.text || !parsed.text.trim()) return null;
  
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
      } else if (parsed.level === 4) {
        return (
          <View key={index} style={styles.exerciseItem}>
            <Text style={styles.exerciseName}>{text}</Text>
          </View>
        );
      }
      return (
        <Text key={index} style={styles.text}>
          {text}
        </Text>
      );
    case 'text':
      // Check if it looks like exercise details (contains "series", "repeticiones", etc.)
      if (text.match(/serie|repeticion|descanso|tiempo|set|rep/i)) {
        return (
          <Text key={index} style={styles.exerciseDetails}>
            {text}
          </Text>
        );
      }
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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Rutina de Entrenamiento</Text>
          <Text style={styles.headerSubtitle}>Entrename IÁ</Text>
        </View>

        {/* Main Content */}
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
                        rowIndex % 2 === 1 && rowIndex !== 0 ? styles.tableRowEven : {},
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

        
        

        {/* Footer */}
        <View style={styles.footer}>
          <Text>© 2026 Entrename IÁ - Rutina personalizada generada con Inteligencia Artificial</Text>
          <Text style={{ marginTop: 3 }}>Consulta a un profesional antes de comenzar cualquier programa de entrenamiento</Text>
        </View>
      </Page>
    </Document>
  );
};