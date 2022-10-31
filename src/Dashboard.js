import React from "react";
import './App.css';
import CollectionBook from "./CollectionBook";
export function Dashboard() {
    const collectionBooks = [
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXuFT-5pg2eqynjHoubtx5xZuOgQUcoT3iw&usqp=CAU",
            title:"Specialist room",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8VZ_ybeBvREeyQL1yJxKiUJC20oAYZfvVg&usqp=CAU",
            title:"Microscope room",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens."
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuq_ZotwPPf6tvZAT4HpqYKnQkx2CHRKsEnBRLJyEmJt1wf5nxJnhXvvO2JAN0pBPBeBE&usqp=CAU",
            title:"Xray",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYcGOJQ_WpUnq-N5xzEYCwAwBz9wBpUfgUQ&usqp=CAU",
            title:"CT scan",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzJy37qzsTb8dMAg9qp8ndbvwdmCYuJz-EXlkOPZxihbCxvJb-3-LA9TMN-Go6Jl2ldc&usqp=CAU",
            title:"Ct scan explain",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIluTGWp_iVOaGqW3wID8n-4c0UMk1mcKpaA&usqp=CAU",
            title:"Physiotherapy",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOkwy37iOOqMXvSUfv-nL_Kv6LgoWBhDFcyw1ln4lS7XT_ZbbiiZ0xFtsPdOVpNUUdDE&usqp=CAU",
            title:"Doctor room",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        {
            img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yA37MerISd-gDvz4Lq3ZRzQZ6oYtUu9h4iSPDGYQVH6fodIQ6NWHE2nWYr2kkZ0MsrU&usqp=CAU",
            title:"Registration",

            descriptions:"A medical laboratory scientist, medical technologist or clinical laboratory scientist, works to analyze a variety of biological specimens"
        },
        
    ]
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-10">
                <div className="row">
                {
                 collectionBooks.map((collection)=>{
                    return  <CollectionBook pData={collection}></CollectionBook>
                 })

                }
                </div>
            </div>
            </div>

        </div>

//         <div >
//             <div  className="d-sm-flex align-items-center bg-light justify-content-between db-head mb-4">
//                 <h1 className="h3 mb-0 text-gray-800">Collections of books</h1>
//                 {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
//                     className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
//             </div>

//             <div className="row dash">

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
//                         {/* <div class="card-header">Books</div> */}
//                         <div class="card-body">
//                             <img src={img} alt="photo"/>
//                             <h5 class="card-title">{title}</h5>
//                             <p class="card-text">{descriptions}</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 {/* <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">School Books</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Novels</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Media</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Comics</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-dark bg-success mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Languages</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>

//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Religious</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div>


//                 <div className="col-xl-3 col-md-6 mb-4">
//                     <div class="card text-dark bg-Warning mb-3" style={{ maxWidth: "18rem" }}>
//                         <div class="card-header">Books</div>
//                         <div class="card-body">
//                             <h5 class="card-title">Story</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                         <div />
//                     </div>
//                 </div> */}

//             </div>

//         </div>

    )
}


