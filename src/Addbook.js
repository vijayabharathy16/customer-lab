
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";


export function Addbook() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: "",
            micro: "",
            category: "",
            count: ""

        },
        validate: (values) => {
            let errors = {};
            if (!values.title) {
                errors.title = "Please enter the title";
            }
            else if (!values.micro) {
                errors.micro = "Please enter the micro";

            } else if (!values.category) {
                errors.category = "Please enter the category"
            } else if (!values.count) {
                errors.count = "Please enter the count"
            }
            return errors

        },
        onSubmit: async (values) => {

            try {
                await axios.post("https://61eeed07d593d20017dbb208.mockapi.io/form/books", values)

                alert("data updated");
                navigate("/books");
            } catch (error) {
                console.log(error)
            }
        }

    })


    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Booking token</h1></div>
            <div className="container">
                <form onSubmit={formik.handleSubmit} >
                    <div className="row">
                        <div className="col-lg-6" >
                            <label>Specialist</label>
                            <input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.title ? <span style={{ color: "red" }}>{formik.errors.title}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Microscoper</label>
                            <input type="text" name="micro" value={formik.values.micro} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.micro ? <span style={{ color: "red" }}>{formik.errors.micro}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Category</label>
                            <input type="text" name="category" value={formik.values.category} onChange={formik.handleChange} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Count</label>
                            <input type="number" name="count" value={formik.values.count} onChange={formik.handleChange} className="form-control" />
                        </div>

                        <div>

                            <input type="submit" className="btn btn-primary mt-3" />
                        </div>

                    </div>
                </form>
            </div>



        </>
    )
}


// https://6290e2f5665ea71fe13cff96.mockapi.io/
