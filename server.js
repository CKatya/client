let cors = require('cors');
let express= require('express');
let path = require('path');
let logger = require('morgan');
const { CONSOLE_APPENDER } = require('karma/lib/constants');
let app = express();

app.use(logger('dev'));
app.use(cors());
app.options('*', cors());
app.use(express.static(__dirname+ '/dist'));

app.get('/*', function(req, res){
    app.sendFile(path.join(__dirname + '/dist/index.html'));
}
);
app.get('*',function(req, res){
    res.redirect("/");
});
app.listen(process.env.PORT || 8080, () =>{
    console.log('====> Angular app is running');
})