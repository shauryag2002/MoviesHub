const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb8ddf0ba8msh4e19f1f4025290bp16a719jsn88f853883ecf',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
const butSearch=document.getElementById("butSearch")
butSearch.onclick=function(){
    const m=document.getElementById("m");
    m.textContent=""
    const input=document.getElementById("input").value;
    // fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input }`, options)
	// .then(response => response.json())
	// .then(data => {
    //     const list=data.d;
    //     list.map((l1)=>{
            
    //         const name=l1.l;
    //         const poster=l1.i.imageUrl;
    //         const movie=`<li><img src="${poster}" alt="${name}" width="100px"><span>${name}</span></li>`
    //         document.querySelector(".movies").innerHTML+=movie;
    //     })
    //     console.log(data.d[0])
    // }
    // )
	// .catch(err => console.error(err));
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input}`, options)
	.then(response => response.json())
	.then(data => {
        const list=data.d;
        list.map((l1)=>{
            
            const name=l1.l;
            const poster=l1.i.imageUrl;
            const movie=`
            <div class="movei"><img src="${poster}" alt="${name}" width="300px"><div>${name}</div>
            </div>`
            document.querySelector(".movies").innerHTML+=movie;
        })
        console.log(data.d[0])
    }
    )
	.catch(err => console.error(err));
}
// fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=spider man`, options)
// 	.then(response => response.json())
// 	.then(data => {
//         const list=data.d;
//         list.map((l1)=>{
            
//             const name=l1.l;
//             const poster=l1.i.imageUrl;
//             const movie=`
//             <div class="movei">
//             <li><img src="${poster}" alt="${name}" width="300px"><div>${name}</div></li>
//             </div>`
//             document.querySelector(".movies").innerHTML+=movie;
//         })
//         console.log(data.d[0])
//     }
//     )
// 	.catch(err => console.error(err));