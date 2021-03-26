/**
 * Create mention list
 *
 * This is Premium feature, Check premium feature at https://trakteer.id/red-emperor/showcase or chat Author for Information.
 *
 * @param  {String} id - sender id
 * @param  {String} botNumber - bot number
 * @param  {Array} list - group members
 * @return {Array} Return processed array
 */
module.exports = mentionList = (id, botNumber, list) => {
    let mentionlist = ''
    list.map((x) => {
        if ((x !== id) && (x !== botNumber)) mentionlist += `@${x.replace('@c.us', '')} `
    })
    return mentionlist
}