import React from 'react'

 async function  page() {

    // ssg 
    //   const response =  await fetch('http://localhost:3000/api/user',{
    //     cache:"force-cache"
    //   });

    //   ssr 
    //   const response =  await fetch('http://localhost:3000/api/user',{
    //     cache:"no-store"
    //   });

    // isr 
      const response =  await fetch('http://localhost:3000/api/user',{
        next:{
            revalidate:5
        }
      });
  console.log( await response.json());
  return (
 <>
    <div>profile page</div>
 </>
  )
}

export default page