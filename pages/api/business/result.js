import excuteQuery from "../../../lib/db";
export default async function handler(req, res) {

    const respo = async function () {

        const resy = JSON.parse(JSON.stringify(req.body));
        if(!resy) console.log('No trans');
    
        console.log(JSON.stringify(resy))
       
                const ResultType = resy.Result.ResultType
                const ResultCode = resy.Result.ResultCode
                const ResultDesc = resy.Result.ResultDesc
                const OriginatorConversationID = resy.Result.OriginatorConversationID
                const ConversationID = resy.Result.ConversationID
                const TransactionID = resy.Result.TransactionID
                const ResultParameters = resy.Result.ResultParameters.ResultParameter
                const DebitPartyCharges = ResultParameters[0].Value
                const CreditAccountBalance  = ResultParameters[1].Value
                const CreditPartyPublicName  = ResultParameters[2].Value
                const DebitAccountCurrentBalance  = ResultParameters[3].Value
                const DebitPartyPublicName  = ResultParameters[4].Value
                const TransCompletedTime  = ResultParameters[5].Value

                // console.log(DebitPartyCharges);
                // console.log(CreditAccountBalance);
                // console.log(CreditPartyPublicName);
                // console.log(DebitAccountCurrentBalance);
                // console.log(DebitPartyPublicName);
                // console.log(TransCompletedTime);


               
           
            

            try {

                const tnx = await excuteQuery({
                    query: 'INSERT INTO b2b_txn (ResultType,ResultCode,ResultDesc,OriginatorConversationID,ConversationID,TransactionID,DebitPartyCharges,CreditAccountBalance,CreditPartyPublicName,DebitAccountCurrentBalance,DebitPartyPublicName,TransCompletedTime) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                    values: [ResultType,ResultCode,ResultDesc,OriginatorConversationID,ConversationID,TransactionID,DebitPartyCharges,CreditAccountBalance,CreditPartyPublicName,DebitAccountCurrentBalance,DebitPartyPublicName,TransCompletedTime]
                })
                console.log(tnx)

            } catch (error) {
                console.log(error)
            }

        

       
    }
    respo()


    res.status(200).json({ name: 'working' })
}