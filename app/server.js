const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();

http.createServer(function(req, res){
 if (req.method == 'POST'){
   var data = "";
   req.on('data', function(chunk){
     data += chunk;
   });
   req.on('end', function(){
     if(!data){
        console.log("No post data");
        res.end();
        return;
     }
     var dataObject = querystring.parse(data);
     console.log("post:" + dataObject.type);
     if(dataObject.type == "wake"){
       console.log("Woke up in post");
       res.end();
       return;
     }
     res.end();
   });
 }
 else if (req.method == 'GET'){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Discord Bot is active now\n');
 }
}).listen(3000);

client.on('ready', message =>{
 console.log('Bot準備完了～');
 client.user.setPresence({ activity: { name: 'げーむ' } });
});

client.on('message', message =>{
 if (message.author.id == client.user.id){
   return;
 }
 if(message.isMemberMentioned(client.user)){
   sendReply(message, "呼びましたか？");
   return;
 }
 if (message.content.match(/にゃ～ん|にゃーん/)){
   let text = "にゃ～ん";
   sendMsg(message.channel.id, text);
   return;
 }
});

if(process.env.TOKEN == undefined){
console.log('TOKENが設定されていません。');
process.exit(0);
}

if (message.content==='御曹司'){
    let text = "> 御曹司について\n彼について検索するとSNSのアカウントが出てきた。\nここ最近かなり派手に遊んでいるようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見優人'){
    let text = "> 深見優人について\n彼の名前で検索するとSNSのアカウントが出てきた。\nここ最近かなり派手に遊んでいるようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見 優人'){
    let text = "> 深見優人について\n彼の名前で検索するとSNSのアカウントが出てきた。\nここ最近かなり派手に遊んでいるようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見　優人'){
    let text = "> 深見優人について\n彼の名前で検索するとSNSのアカウントが出てきた。\nここ最近かなり派手に遊んでいるようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='弁護士'){
    let text = "> 弁護士について\n彼女について検索すると、所属している弁護士会と弁護士事務所のHPが表示される。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野日葵'){
    let text = "> 日野日葵について\n彼女の名前で検索すると、所属している弁護士会と弁護士事務所のHPが表示される。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野 日葵'){
    let text = "> 日野日葵について\n彼女の名前で検索すると、所属している弁護士会と弁護士事務所のHPが表示される。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野　日葵'){
    let text = "> 日野日葵について\n彼女の名前で検索すると、所属している弁護士会と弁護士事務所のHPが表示される。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='医者'){
    let text = "> 医者について\n彼について検索すると、勤務している病院のHPが表示される。\n有名な大学病院の緩和医療科に所属しているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木康文'){
    let text = "> 白木康文について\n彼の名前で検索すると、勤務している病院のHPが表示される。\n有名な大学病院の緩和医療科に所属しているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木 康文'){
    let text = "> 白木康文について\n彼の名前で検索すると、勤務している病院のHPが表示される。\n有名な大学病院の緩和医療科に所属しているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木　康文'){
    let text = "> 白木康文について\n彼の名前で検索すると、勤務している病院のHPが表示される。\n有名な大学病院の緩和医療科に所属しているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='画家'){
    let text = "> 画家について\n彼について検索すると、新進気鋭のクリエイターへのインタビュー記事が表示される。\n芸大在学中から特定の女性の絵しか描かないことで近頃話題だそう。\n「世界でいちばん美しい人を描き続けたい」と答えているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野春香'){
    let text = "> 日野春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野 春香'){
    let text = "> 日野春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野　春香'){
    let text = "> 日野春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='探偵'){
    let text = "> 探偵について\n彼について検索しても特に情報は出ないようだ。\n個人事務所のHPなどは無いらしい。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='藤原景'){
    let text = "> 藤原景について\n彼の名前を検索しても特に情報は出ないようだ。\n個人事務所のHPなどは無いらしい。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='藤原 景'){
    let text = "> 藤原景について\n彼の名前を検索しても特に情報は出ないようだ。\n個人事務所のHPなどは無いらしい。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='藤原　景'){
    let text = "> 藤原景について\n彼の名前を検索しても特に情報は出ないようだ。\n個人事務所のHPなどは無いらしい。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見修吾'){
    let text = "> 深見修吾について\n深見物産のHPやゴシップ記事が出てくる。\nライバル企業の業績がここ数年で急に伸びてきている様だ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見 修吾'){
    let text = "> 深見修吾について\n深見物産のHPやゴシップ記事が出てくる。\nライバル企業の業績がここ数年で急に伸びてきている様だ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見　修吾'){
    let text = "> 深見修吾について\n深見物産のHPやゴシップ記事が出てくる。\nライバル企業の業績がここ数年で急に伸びてきている様だ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見物産'){
    let text = "> 深見物産について\n国内シェア上位に食い込む商社。\n最近は様々な分野に進出しているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='ライバル企業'){
    let text = "> ライバル企業について\n複数の商社のHPが出てくる。\n株価などを確認すると、他の商社が業績が伸びているというより深見物産の業績が落ちているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='春野美咲'){
    let text = "> 春野美咲について\n君は何故彼女の名前を知っている？";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='死亡推定時刻'){
    let text = "> 死亡推定時刻について\n医療や人体についての心得がある者なら死後硬直や死斑から、死後何時間経過しているか知ることができるだろう。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木果奈'){
    let text = "> 白木果奈について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木 果奈'){
    let text = "> 白木果奈について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木　果奈'){
    let text = "> 白木果奈について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木晴果'){
    let text = "> 白木晴果について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木 晴果'){
    let text = "> 白木晴果について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木　晴果'){
    let text = "> 白木晴果について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木春香'){
    let text = "> 白木春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木 春香'){
    let text = "> 白木春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='白木　春香'){
    let text = "> 白木春香について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='遥善治'){
    let text = "> 遥善治について\n彼について検索するとSNSのアカウントが出てきた。\n怪しげなクラブでの投稿を最後に、ここ1ヶ月ほど何も更新されていないようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='遥 善治'){
    let text = "> 遥善治について\n彼について検索するとSNSのアカウントが出てきた。\n怪しげなクラブでの投稿を最後に、ここ1ヶ月ほど何も更新されていないようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='遥　善治'){
    let text = "> 遥善治について\n彼について検索するとSNSのアカウントが出てきた。\n怪しげなクラブでの投稿を最後に、ここ1ヶ月ほど何も更新されていないようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='遺産 実子 取り分'){
    let text = "> 「遺産 実子 取り分」について\n調べてみると、認知をしていなくても血縁関係にあると証明されれば、遺産は実子と同じように分配されるらしいということが分かった。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='遺産　実子　取り分'){
    let text = "> 「遺産　実子　取り分」について\n調べてみると、認知をしていなくても血縁関係にあると証明されれば、遺産は実子と同じように分配されるらしいということが分かった。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='愛人 遺言書'){
    let text = "> 「愛人 遺言書」について\n調べてみると、遺言書で「全額を愛人に贈与する」という記載があったとしても遺留分というものが発生し、最低でも本来相続するはずだった額の1/2は実子に分配されるということが分かった。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='愛人　遺言書'){
    let text = "> 「愛人　遺言書」について\n調べてみると、遺言書で「全額を愛人に贈与する」という記載があったとしても遺留分というものが発生し、最低でも本来相続するはずだった額の1/2は実子に分配されるということが分かった。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野茉莉花'){
    let text = "> 日野茉莉花について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野 茉莉花'){
    let text = "> 日野茉莉花について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野　茉莉花'){
    let text = "> 日野茉莉花について\n検索してもめぼしい情報は見当たらなかった。実名のSNSアカウントがあるとしたら非公開なのかもしれない。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野茉莉花 訃報'){
    let text = "> 「日野茉莉花 訃報」について\n彼女の名前を検索してみると、訃報をまとめるサイトを見つけた。\nどうやら同姓同名の女性が十数年前に亡くなっているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='日野茉莉花　訃報'){
    let text = "> 「日野茉莉花　訃報」について\n彼女の名前を検索してみると、訃報をまとめるサイトを見つけた。\nどうやら同姓同名の女性が十数年前に亡くなっているようだ。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='ジャスミン'){
    let text = "> ジャスミンについて\nモクセイ科ソケイ属の植物。\n一般的に、白もしくは黄色の花をつける。\n漢字では茉莉花と表記されることもある。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='茉莉花'){
    let text = "> 茉莉花について\n一般的にジャスミンと呼ばれる花の漢字表記。\nインド、スリランカ、イラン、東南アジアなどに自生する植物。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='緩和医療科'){
    let text = "> 緩和医療科について\n病院によって呼称は変わるが、終末期医療を主に行う科。\nホスピスなどもこれに該当する。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='終末期医療'){
    let text = "> 終末期医療について\n一般的に、末期がんの患者に対して行われる。\n残り僅かな余命を穏やかに過ごせるよう、抗がん剤の投与を中止し身体的・精神的苦痛を取り除くための処置が行われる。";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='犯人'){
    let text = "> 犯人について\n犯人とは、法によって禁じられ国家が刑罰を科す根拠となる事実・行為を行った人物のこと。\nhttps://ja.wikipedia.org/wiki/%E7%8A%AF%E4%BA%BA";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='凶器'){
    let text = "> 凶器について\n凶器とは、ヒトの生命・身体に危害を与え、殺害や傷害のために用いられる道具の総称。主に刀剣や銃砲など。\nhttps://ja.wikipedia.org/wiki/%E5%87%B6%E5%99%A8";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='スマホ入手'){
    let text = "――――――――――――――――――\n**スマートフォンについて**\n\n\nカード「スマートフォン」を所持している間、このチャンネルを使用して調べ物をすることが可能です。\n使用する際は、調べたいキーワードを入力してください。\n\n検索例：自分の役職名\n\n**※このカードを他のPCへ譲渡する場合、必ずGMへ宣言してから譲渡を行ってください。※**\n\n――――――――――――――――――";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='深見邸殺人事件'){
    let text = "> 深見邸殺人事件\nboothにて公開中！\nhttps://ricecat.booth.pm/items/3366021";
    sendMsg(message.channel.id, text);
    return;
  }
if (message.content==='公正証書遺言書'){
    let text = "> 公正証書遺言書について\n公証人にて作成される遺言書。\nこれは公文書として扱われ、原本は公証役場にて保管される。\n公証人が書類を作成するため、一般的な重要書類と違い本人の捺印が無いのが特徴的。";
    sendMsg(message.channel.id, text);
    return;
  }


client.login( process.env.DISCORD_BOT_TOKEN );

function sendReply(message, text){
 message.reply(text)
   .then(console.log("リプライ送信: " + text))
   .catch(console.error);
}

function sendMsg(channelId, text, option={}){
 client.channels.get(channelId).send(text, option)
   .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
   .catch(console.error);
}