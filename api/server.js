const express = require('express');
const request = require('request-promise');
const cors = require('cors')
const app = express();

const HEADERS = {
    'authority': "u.y.qq.com",
    'accept': "application / json",
    'user-agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    'origin': "https://i.y.qq.com",
    'referer': "https://i.y.qq.com/",
}
app.use(cors())

module.exports = async(req, res) => {
    const url = `https://u.y.qq.com/cgi-bin/musicu.fcg?_=${+new Date()}&data={"comm":{"g_tk":1775699468,"uin":2313970630,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"playSongAd":{"module":"SongPlay.SongPlayBaseServer","method":"GetPlaySongAd","param":{"channel":3,"app_user":1,"platform":2,"forbid":0,"share_musicid":"","encodetype":1,"adtype":8}}}`
    try {
        res.send(await request({
            url: url,
            json: true,
            headers: HEADERS
        }))
    } catch (e) {
        res.send({ error: e.massage })
    }

}