module.exports = {
    testController: async (req, res) => {
        console.log("test controller OK!")
        return res.send({success: true, message: "ok"});
    }
}