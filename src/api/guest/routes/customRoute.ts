module.exports = {
    routes: [
        {
            method: "POST",
            path: "/guests/upload",
            handler: "guest.bulkUpload",
            config: {
                policies: [],
                prefix: "",
                description: "API to upload bulk guests from CSV template",
            },
        },
        {
            method: "PUT",
            path: "/guests/publish",
            handler: "guest.bulkPublish",
            config: {
                policies: [],
                prefix: "",
                description: "API to bulk publish guest",
            },
        },
    ]
}