import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

/* =======================
   🎨 STYLES
======================= */
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff', // blanco (fondo general)
  },

  header: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#dc2626', // borde rojo como en web
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937', // gris muy oscuro
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6b7280', // gris medio
    marginTop: 6,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937', // gris muy oscuro (título principal)
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#dc2626', // borde rojo como en web
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f59e0b', // naranja/amarillo oscuro (como h2 en web)
    marginTop: 16,
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b82f6', // azul (como h3 en web)
    marginTop: 12,
    marginBottom: 8,
  },
  
  subsubsectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8b5cf6', // púrpura (como h4 en web)
    marginTop: 10,
    marginBottom: 6,
  },

  text: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#4b5563', // gris oscuro (texto normal)
    marginBottom: 8,
  },

  textBlock: {
    marginBottom: 6,
  },
  
  strongText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#f59e0b', // amarillo/naranja (como strong en web)
    lineHeight: 1.7,
  },

  exerciseItem: {
    padding: 10,
    marginBottom: 10,
    marginTop: 6,
    backgroundColor: '#fef2f2', // fondo rojo muy claro
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444', // rojo (como en web)
    borderRadius: 3,
  },
  exerciseName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3b82f6', // azul para nombres de ejercicio
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 12,
    color: '#6b7280', // gris medio
    fontStyle: 'italic',
    marginTop: 2,
  },

  listItem: {
    fontSize: 13,
    marginBottom: 6,
    marginLeft: 12,
    color: '#4b5563', // gris oscuro
    lineHeight: 1.6,
  },
  
  listMarker: {
    color: '#ef4444', // marcador rojo (como en web)
  },

  table: {
    marginTop: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#d1d5db', // borde gris claro
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableRowEven: {
    backgroundColor: '#f9fafb', // gris muy claro (filas alternadas)
  },
  tableHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    backgroundColor: '#ef4444', // rojo (como en web)
    color: '#ffffff', // blanco
    paddingVertical: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
  tableCell: {
    fontSize: 11,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flex: 1,
    color: '#4b5563', // gris oscuro
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', // líneas suaves
  },

  divider: {
    height: 2,
    backgroundColor: '#e5e7eb', // gris claro (separador como hr en web)
    marginVertical: 14,
  },

  codeBlock: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9fafb', // fondo gris claro
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444', // borde rojo (como pre en web)
    borderRadius: 3,
  },
  codeText: {
    fontSize: 11,
    color: '#1f2937', // texto oscuro
    fontFamily: 'Courier',
    lineHeight: 1.5,
  },
  
  blockquote: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fefce8', // fondo amarillo muy claro
    borderLeftWidth: 4,
    borderLeftColor: '#fbbf24', // borde amarillo (como en web)
    borderRadius: 3,
  },
  blockquoteText: {
    fontSize: 12,
    color: '#6b7280', // gris medio
    fontStyle: 'italic',
    lineHeight: 1.6,
  },

  footer: {
    position: 'absolute',
    bottom: 20,
    left: 36,
    right: 36,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', // borde suave
    paddingTop: 8,
    fontSize: 9,
    color: '#9ca3af', // gris claro
    textAlign: 'center',
  },
});

/* =======================
   🧹 CLEAN MARKDOWN
======================= */
const clean = (text = '') =>
  text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/~/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();

/* =======================
   🔍 HELPERS
======================= */
const isExerciseDetail = (text) =>
  /serie|repeticion|descanso|tiempo|set|rep|seg|kg/i.test(text);

const isExerciseTitle = (text) =>
  text.length < 60 && !text.includes(':');

/* =======================
   🧠 PARSER
======================= */
const parseMarkdown = (rutina) => {
  const lines = rutina.split('\n').filter((l) => l.trim());

  const content = [];
  let tableRows = [];
  let inTable = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    // ✅ DIVIDER (--- *** ___)
    if (/^[-*_]{3,}$/.test(trimmed)) {
      if (inTable) {
        content.push({ type: 'table', rows: tableRows });
        tableRows = [];
        inTable = false;
      }
      content.push({ type: 'divider' });
      return;
    }

    // TABLE
    if (/^\|.*\|$/.test(trimmed)) {
      const cells = trimmed
        .split('|')
        .slice(1, -1)
        .map((c) => clean(c));

      if (!cells.every((c) => /^:?-+:?$/.test(c))) {
        inTable = true;
        tableRows.push(cells);
      }
      return;
    }

    // CLOSE TABLE
    if (inTable) {
      content.push({ type: 'table', rows: tableRows });
      tableRows = [];
      inTable = false;
    }

    // HEADINGS
    const h = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      content.push({
        type: 'heading',
        level: h[1].length,
        text: clean(h[2]),
      });
      return;
    }

    // LIST
    const list = trimmed.match(/^[-*]\s+(.+)$/);
    if (list) {
      content.push({ type: 'list', text: clean(list[1]) });
      return;
    }

    // TEXT
    content.push({ type: 'text', text: clean(trimmed) });
  });

  if (inTable) {
    content.push({ type: 'table', rows: tableRows });
  }

  return content;
};

/* =======================
   🎯 RENDER
======================= */
const renderItem = (item, index) => {
  if (!item) return null;

  if (item.type === 'divider') {
    return <View key={index} style={styles.divider} />;
  }

  if (item.type === 'heading') {
    if (item.level === 1) {
      return <Text key={index} style={styles.mainTitle}>{item.text}</Text>;
    }

    if (item.level === 2) {
      return <Text key={index} style={styles.sectionTitle}>{item.text}</Text>;
    }

    if (item.level === 3) {
      // Si es un título de ejercicio, usar tarjeta especial
      if (isExerciseTitle(item.text)) {
        return (
          <View key={index} wrap={false} style={styles.exerciseItem}>
            <Text style={styles.exerciseName}>{item.text}</Text>
          </View>
        );
      }
      return <Text key={index} style={styles.subsectionTitle}>{item.text}</Text>;
    }

    // H4 y siguientes en púrpura
    return <Text key={index} style={styles.subsubsectionTitle}>{item.text}</Text>;
  }

  if (item.type === 'list') {
    return (
      <View 
        key={index} 
        wrap={false}
        style={{ flexDirection: 'row', marginBottom: 6, marginLeft: 12 }}
      >
        <Text style={{ color: '#ef4444', marginRight: 6 }}>•</Text>
        <Text style={styles.listItem}>{item.text}</Text>
      </View>
    );
  }

  if (item.type === 'text') {
    if (isExerciseDetail(item.text)) {
      return (
        <View 
          key={index} 
          wrap={false}
          style={{ 
            paddingVertical: 4, 
            paddingHorizontal: 10,
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          <Text style={styles.exerciseDetails}>
            {item.text}
          </Text>
        </View>
      );
    }

    return (
      <View key={index} wrap={false} style={styles.textBlock}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  if (item.type === 'table') {
    return (
      <View key={index} style={styles.table}>
        {item.rows.map((row, rIdx) => (
          <View
            key={rIdx}
            style={[
              styles.tableRow,
              rIdx % 2 === 1 && styles.tableRowEven,
            ]}
          >
            {row.map((cell, cIdx) => (
              <Text
                key={cIdx}
                style={rIdx === 0 ? styles.tableHeader : styles.tableCell}
              >
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    );
  }

  return null;
};

/* =======================
   📄 MAIN COMPONENT
======================= */
export const MyDocumentPDF = ({ rutina }) => {
  const content = parseMarkdown(rutina);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Plan de Entrenamiento</Text>
          <Text style={styles.headerSubtitle}>RepWise Fitness</Text>
        </View>

        {/* CONTENT */}
        <View>
          {content.map((item, index) => renderItem(item, index))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text>© 2026 RepWise Fit - Rutina generada con IA</Text>
          <Text>Consulta a un profesional antes de entrenar</Text>
        </View>

      </Page>
    </Document>
  );
};