'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
  const vote = this.mongo.db.collection('Vote')
  const result = await vote.find({}).toArray()
    console.log('@@@@@@',result)
  if(result.length===0){
    reply
        .code(404)
        .header('content-type', 'application/json')
        .send('Not Found!')
    }
    else{
      reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
    }
}
  )

  fastify.get('/:id', async function (request, reply) {
    
    const vote = this.mongo.db.collection('Vote')
    const id = this.mongo.ObjectId(request.params.id)
    const result = await vote.findOne(id, vote)

    if(result===null){
    reply
        .code(404)
        .header('content-type', 'application/json')
        .send('Not Found!')
    }
    else{
      reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
    }
  }
    )
 
}