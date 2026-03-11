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

  // Count leading # for heading level
  const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const text = headingMatch[2].replace(/\*/g, ''); // Remove asterisks
    return { type: 'heading', level, text };
  }

  // Check if line is plain text
  return { type: 'text', text: line };
};

// Function to render content based on parsed markdown
const renderContent = (line, index) => {
  const parsed = parseMarkdownLine(line);
  
  if (!parsed || !parsed.text.trim()) return null;

  const text = parsed.text.replace(/\*/g, '').trim(); // Remove asterisks

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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {lines.map((line, index) => renderContent(line, index))}
        </View>
        <View style={styles.footer}>
          <Text>Rutina personalizada - GimnasIA</Text>
        </View>
      </Page>
    </Document>
  );
};