
if(localStorage.getItem('main') === null)
{
    localStorage.setItem('main','')
}

let list = localStorage.getItem('main');

function setCookie() 
{    if(localStorage.getItem('main') === null)
    {
        localStorage.setItem('main','')
        list = localtorage.getItem('main');
    }

    let key = document.getElementById("new_cookie_key").value
    
    if (localStorage.getItem('main') === '') 

    {
        localStorage.setItem('main',key)
        list = key   
    }
    else
    {
        list = list + ',' + key
        localStorage.setItem('main',list)
    }
 
    value = document.getElementById("new_cookie_value").value

    localStorage.setItem(key,value)
}

function getCookie() 
{
    let key = document.getElementById("get_cookie_key").value
    let value = localStorage.getItem(key)
    
    document.getElementById("get_cookie_value").innerHTML = value
}

function deleteCookie() 
{
    //get key from front-end
    let key = document.getElementById("delete_cookie_key").value
    // delete 'key' from 'list'
    
    let demo = list.split(',')

    for (let i = 0; i < demo.length; i++) 
    {
        if (demo[i] === key) 
        {
            let j = i
            while (demo[j] != null) 
            {
                demo[j] = demo[j+1]
                j++
            }
        }    
    }
    demo.length = demo.length - 1
    list = demo
    // update 'main' with 'list'
    localStorage.setItem("main",list)
    // delete value assosiated with 'key' from local storage
    localStorage.removeItem(key)
    alert("Cookie with Key : " + key + " has been deleted")
}

function listCookies() 
{
    let value;
    list = localStorage.getItem('main');
    let demo = list.split(',')

    for (let i = 0; i < demo.length; i++) 
    {
        if(value === null)
        {

        }
        else
        {
            value = value + ',' +localStorage.getItem(demo[i])
            document.getElementById("list_all_cookies").innerHTML = value;
        }    
    }

}
