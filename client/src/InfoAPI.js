export default {
    getInfos : ()=>{
        return fetch('/info').then(res => res.json()).then(data => data);
    },


    deleteInfo : (_id)=>{
        return fetch(`/info/${_id}`,{method : "delete"}).then(res => res.json()).then(data => data);
    },


    updateInfo : (info)=>{
        return fetch(`/info/${info._id}`,  
                    {method : "put",
                    body: JSON.stringify(info),
                    headers : {
                         "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
    },

    createInfo : (info)=>{
        return fetch('/info',
            {method : "post",
            body: JSON.stringify(info),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}