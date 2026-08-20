const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return{
            env: {
                mongodb_username: 'antoninaparulava_db_user',
                mongodb_password: '2p8618Bef50E8Ow8', 
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            }, 
        };
    }

    return{
    env: {
        mongodb_username: 'antoninaparulava_db_user',
        mongodb_password: '2p8618Bef50E8Ow8', 
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site'
    }, 
    }
   
};
