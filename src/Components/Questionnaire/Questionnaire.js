import "./Quastionnaire.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Layout from "../../Layout/Layout"


function Questionnaire() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 5;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <>
<Layout>


      <div className="Que-container">
        <div className="container">
          <div className="row m-2">
            {items.map((item) => {
              return (
                <div key={item.id} className="col-sm-12 col-md-12 v my-2">
                  <div className="card shadow-sm w-100" style={{ minHeight: 100 }}>

                    <div className="card-body">
                      <div className="row m-2">
                        <div className="col-sm-12 col-md-12">
                          <p className="card-title text-left " style={{ fontSize: "20px", fontWeight: 500 }}> <span style={{ fontSize: "20px", fontWeight: 500 }}> Question :{item.id} </span> {item.body} </p>
                        </div>

                        <div className="col-sm-12 col-md-12">
                          <div>

                            <FormControl>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel value="Does independently" control={<Radio />} label="Does independently " />
                                <FormControlLabel value="Verbal prompt required" control={<Radio />} label=" Verbal prompt required" />
                                <FormControlLabel value="Gestural prompt required" control={<Radio />} label="Gestural prompt required" />
                                <FormControlLabel value="Physical prompt required" control={<Radio />} label="Physical prompt required" />
                                <FormControlLabel value="disabled"control={<Radio />} label="Unable to do the task"/></RadioGroup>
                            </FormControl>
                          </div>
                        </div>




                      </div>




                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Questionnaire;