const {kafka} = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log('Admin Connecting .......');
    admin.connect();
    console.log('Admin Connection Success.');
    
    console.log('Creating topic [rider-updates]');
    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions: 2,
        },],
    });
    console.log('Topic Created Success [rider-updates]');
    
    console.log('Disconnecting Admin .......');
    await admin.disconnect();
    console.log('Admin Disconnected Success.');
}

init();