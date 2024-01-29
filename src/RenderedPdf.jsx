import { PDFViewer, Document, View, Text, Page } from "@react-pdf/renderer";
import React from "react";

function RenderedPdf() {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <View>
            <Text style={{ fontSize: "42px" }}>Hello ®</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default RenderedPdf;
