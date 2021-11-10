const path = require("path");
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

app.use(express.json());


app.use("/", express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "build/index.html"));
});


app.post('/sendmessage', function(req, res){    

    const oauth2Client = new OAuth2(
        "57287527518-g5l87ve7kvlhl1b7g2e0693ss5u2u9ou.apps.googleusercontent.com", // ClientID
        "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", // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: "1//04GppIZZDB2K9CgYIARAAGAQSNwF-L9IriAPTzlcthh2Vc5Z79iqDxoO8GPdpmJfBsdsOmn2EpGkRn1S7R1yqxZigLobcFBTdNoE"
    });

    async function sendMail(){
        const accessTok = await oauth2Client.getAccessToken()
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                 type: "OAuth2",
                 user: "sergioa.garcia217@gmail.com", 
                 clientId: "57287527518-g5l87ve7kvlhl1b7g2e0693ss5u2u9ou.apps.googleusercontent.com",
                 clientSecret: "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",
                 refreshToken: "1//04GppIZZDB2K9CgYIARAAGAQSNwF-L9IriAPTzlcthh2Vc5Z79iqDxoO8GPdpmJfBsdsOmn2EpGkRn1S7R1yqxZigLobcFBTdNoE",
                 accessToken: accessTok["token"],
            }
        });
    
        transporter.set('oauth2_provision_cb', (user, renew, callback) => {
            let accessToken = transporter[user];
            if(!accessToken){
                return callback(new Error('Unknown user'));
            }else{
                return callback(null, accessToken);
            }
        });

        transporter.sendMail({
            from: 'sergioa.garcia217@gmail.com',
            to: 'sergioa.garcia217@gmail.com',
            subject: req.body.subject,
            auth: {
                user: 'sergioa.garcia217@gmail.com'
            },
            html: `
            <p>${req.body.msg}</p>
            <br/>
            <p> ${req.body.name}</p>
            <p> ${req.body.email}</p>
            `,
        });

        res.json({"done":"True"})
    }
    sendMail();
})


app.listen(PORT, async function() {
    console.log(`Listening on Port ${PORT}`);
});
