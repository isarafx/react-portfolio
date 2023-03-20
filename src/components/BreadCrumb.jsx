import React from 'react'

const BreadCrumb = (path_array) => {
  return (
    <nav aria-label="breadcrumb">
        {/* <h1>{JSON.stringify(bread)}</h1> */}
        <ol class="breadcrumb">
            {
                path_array['path_array'].map((item, index)=>{
                    return (<li class="breadcrumb-item"><a href={item[0]}>{item[1]}</a></li>)
                })
            }
        </ol>
    </nav>
  )
}

export default BreadCrumb
