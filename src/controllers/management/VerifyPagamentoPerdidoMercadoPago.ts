import { Request, Response } from "express";
import { MercadoPagoUtils } from "../../utils/MercadoPago";
import { WebhookDatabase } from "../../services/WebhookDatabase";
export class VerifyPagamentoPerdidoMercadoPago {
    static async pagamento(request: Request, response: Response) {
        let content: any = null
        try {
            const id = Number(request.query.id)
            content = await MercadoPagoUtils.GetPayment(id)

            if (content != undefined) {
                const update = await WebhookDatabase.WebHook(String(id), "payment.updated")
                const contentUpdate = await WebhookDatabase.WebHook(String(id), "payment.updated")
                return response.json({ update, contentUpdate, pagamento: content?.response })
            }

        } catch (error) {
            console.log(error);
            response.json({ error })

        }


    }
}