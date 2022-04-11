import excuteQuery from '../../../lib/db'
export default async function handler(req, res) {

    const respo = async function () {

        const resy = JSON.parse(JSON.stringify(req.body));
        console.log(JSON.stringify(resy))
        if (resy) {

            const merchId = resy.Body.stkCallback.MerchantRequestID;
            const checkoutId = resy.Body.stkCallback.CheckoutRequestID;
            const resultcode = resy.Body.stkCallback.ResultCode;
            const resultdesc = resy.Body.stkCallback.ResultDesc;
            const metadata = resy.Body.stkCallback.CallbackMetadata

            const arr = metadata.Item;
            const Amount = arr[0].Value;
            const MpesaReceiptNumber = arr[1].Value;
            const PhoneNumber = arr[4].Value
            const TransactionDate = arr[3].Value
           
            

            try {

                const tnx = await excuteQuery({
                    query: 'INSERT INTO mpesa_tnx (MerchantRequestID,CheckoutRequestID,ResultCode,ResultDesc,Amount,MpesaReceiptNumber,TransactionDate,PhoneNumber) VALUES(?,?,?,?,?,?,?,?)',
                    values: [merchId, checkoutId, resultcode, resultdesc,Amount,MpesaReceiptNumber,TransactionDate,PhoneNumber]
                })
                console.log(tnx)

            } catch (error) {
                console.log(error)
            }

        }

        return req.body
    }
    respo()


    res.status(200).json({ name: 'working' })
}