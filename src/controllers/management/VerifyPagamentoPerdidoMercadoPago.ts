import { Request, Response } from "express";
import { MercadoPagoUtils } from "../../utils/MercadoPago";
export class VerifyPagamentoPerdidoMercadoPago {
    static async pagamento(request: Request, response: Response) {
        const content = await MercadoPagoUtils.GetPayment(57527853353)
        response.json({pagamento: content?.response})
    }
}