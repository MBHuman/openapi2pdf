import { Content } from "pdfmake/interfaces";
import { PdfPartProcessor } from "./partProcessor";

export class PdfPartApi extends PdfPartProcessor {


  async getDef(): Promise<Content[]> {

    throw new Error("Method not implemented.");
  }
}