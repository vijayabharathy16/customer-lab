import React from 'react'

function CollectionBook(props) {
    return (
        <div className="col-lg-3 mt-2 mb-3 sm-2 ">
                   
            <div className ="card" style={{ Width: "23rem" }}>
                {/* <div class="card-header">Books</div> */}
        
                 <img src={props.pData.img} style={{height:"200px"}} width={"250px"} background-image={"cover"}  alt='photo'/>
                <div className="card-body">

                    <h5 className="card-title">{props.pData.title}</h5>
                    <p className="card-text">{props.pData.descriptions}</p>
                </div>
                <div />
            </div>
        </div>

        // <div className='col-lg-3 mb-3'>
        // <div class="card" style="width: 18rem;">
        //     <img src={props.pData.img} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <h5 class="card-title">{props.pData.title}</h5>
        //             <p class="card-text">{props.pData.descriptions}</p>
                   
        //         </div>
        // </div>
        // </div>

    )
}

export default CollectionBook