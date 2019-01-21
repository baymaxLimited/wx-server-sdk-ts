function main() {
    cloud.getWXContext()
    const db = cloud.database({
        env: "test"
    })
    db.collection("todos").doc('abc')
        .limit(12)
        .skip(12)
        .where({
            a: 'sd',
            b: 'te'
        }).get()
}