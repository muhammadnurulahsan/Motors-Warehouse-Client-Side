import React from "react";
import "./Blogs.css";
import img01 from "./../../assets/javascript-vs-nodejs.png";
import img02 from "./../../assets/node-mongo.jpg";
import img03 from "./../../assets/nosql.jpg";
import img04 from "./../../assets/jwt.jpg";

const Blogs = () => {
  return (
    <div>
      <div className="blog-bg-img py-5">
        <div className="container">
          <h1 className="big-text ms-4">Blogs</h1>
          <h5 className="ms-4 text-light">
            Home <span className="header-normal-text">/ Blogs</span>
          </h5>
        </div>
      </div>
      <div className="container pt-5 mt-5">
        <div>
          <h1 className="text-center blogs-big-text mx-4">
            Difference Between JavaScript & NodeJS
          </h1>
          <div className="col-12 d-flex my-5 justify-content-between align-items-center flex-wrap">
            <div className="col-md-6 col-sm-1">
              <img
                src={img01}
                className="shadow rounded-3 mt-4 p-5 img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6 col-sm-1">
              <div className="ms-md-5 mx-4 mt-4">
                <p className="normal-text">
                  <strong>Javascript is a lightweight</strong>, object-oriented
                  scripting language that is used to build dynamic HTML pages
                  with interactive effects on a webpage. JavaScript is also
                  commonly used in game development and mobile app development.
                  It is an interpreted scripting language, and the code can only
                  be executed and run in a web browser. We can use Node.js to
                  execute and run the code outside of the browser.
                </p>
                <p className="normal-text">
                  <strong>Node.js is a cross-platform</strong>, open-source
                  JavaScript runtime environment that enables JavaScript to be
                  run on the server. Node.js enables JavaScript code to run
                  outside of the browser. Node.js comes with a large number of
                  modules and is mostly used in web creation. It may run on
                  various platforms including, Windows, Linux, Mac OS, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center mb-5 py-4 blogs-big-text mx-4">
          What Difference in Between JavaScript & NodeJS?
        </h1>

        <div className="table-responsive">
          <table className="table normal-text table-striped table-bordered">
            <thead>
              <tr className="table-title-text">
                <th scope="col">JavaScript</th>
                <th scope="col">NodeJs</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <ul className="p-2">
                    <li>
                      <p className="mt-3">
                        JavaScript Is A Programming Language.
                      </p>
                    </li>
                    <li>
                      <p>Javascript runs only in web browser.</p>
                    </li>
                    <li>
                      <p>Javascript is used in frontend development.</p>
                    </li>
                    <li>
                      <p>
                        JavaScript Is Used For Form Validation, Interactive
                        Behaviors in web pages.
                      </p>
                    </li>
                    <li>
                      <p>
                        Almost Every Browser has javascript engine to run
                        javascript code in browser.{" "}
                      </p>
                    </li>
                  </ul>
                </td>

                <td>
                  <ul className="p-2">
                    <li>
                      <p className="mt-3">NodeJS is a javascript runtime.</p>
                    </li>
                    <li>
                      <p>
                        NodeJS takes javascript out of the browser to run in
                        server.
                      </p>
                    </li>
                    <li>
                      <p>
                        NodeJS is used for write server-side code in javascript.
                      </p>
                    </li>
                    <li>
                      <p>
                        NodeJS runs with the chrome's v8 engine. it doesn't work
                        in any engine.
                      </p>
                    </li>
                    <li>
                      <p>
                        We can run Javascript outside the browser with the help
                        of NodeJS.
                      </p>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1 className="text-center blogs-big-text mt-5 mx-4">
            When should you use nodejs and <br /> when should you use mongodb?
          </h1>
          <div className="col-12 d-flex flex-column-reverse flex-md-row my-5 justify-content-between align-items-center flex-wrap">
            <div className="col-md-6 col-sm-1">
              <div className="ms-md-5 mx-4 mt-4">
                <p className="normal-text">
                  <strong>NODEJS: </strong> NodeJS is a javascript runtime which
                  runs javascript codes outside of the browser. At First
                  JavaScript Was only able to run in the browser. Nodejs made it
                  possible to run it outside of the browser. We can now write
                  javascript for backend development by the help of nodejs.
                  Thats Why It is called a runtime and it is not a programming
                  language. We Should Use nodejs when we want to develope
                  backend for a website or app.
                </p>
                <p className="normal-text">
                  <strong>MONGODB: </strong>
                  MongoDB is a database. It is a nosql database. It gives us
                  chance to efficiently store documents in a database and to
                  perform operations like data updates, delete, add, read or
                  search. If a application need to store data in a simple and
                  efficient way then we can use mongodb. this is the use case of
                  mongodb.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-1">
              <img
                src={img02}
                className="shadow rounded-3 mt-4 img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <h1 className="text-center blogs-big-text mx-4">
            Differences between SQL and NoSQL Databases.
          </h1>
          <div className="col-12 d-flex my-5 justify-content-between align-items-center flex-wrap">
            <div className="col-md-6 col-sm-1">
              <img
                src={img03}
                className="shadow rounded-3 mt-4 img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6 col-sm-1">
              <div className="ms-md-5 mx-4 mt-4">
                <p className="normal-text">
                  <strong>SQL</strong> stands for Structured Query Language.
                  It's used for relational databases. A SQL database is a
                  collection of tables that stores a specific set of structured
                  data. The SQL database has long been the tried and true
                  workhorse of the backend enterprise and at the heart of
                  everything we do in this electronic age. SQL was created in
                  the early 1970s at IBM as method of accessing IBM’s System R
                  database system.
                </p>
                <p className="normal-text">
                  <strong>NoSQL databases</strong> (aka "not only SQL") are
                  non-tabular databases and store data than relational tables.
                  NoSQL databases come in a variety of types based on their data
                  model. The main types are document, key-value, wide-column,
                  and graph. They provide flexible schemas and scale easily with
                  large amounts of data and high user loads.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-center my-5 py-5 blogs-big-text mx-4">
          What Differences in between SQL and NoSQL Databases.?
        </h1>

        <div className="table-responsive">
          <table className="table normal-text table-striped table-bordered">
            <thead>
              <tr className="table-title-text">
                <th scope="col">SQL</th>
                <th scope="col">NoSQL</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <ul className="p-2">
                    <li>
                      <p className="mt-3">
                        SQL databases Follows ACID property.
                      </p>
                    </li>
                    <li>
                      <p>SQL databases Vertically Scalable.</p>
                    </li>
                    <li>
                      <p>SQL databases are best suited for complex queries.</p>
                    </li>
                    <li>
                      <p>
                        SQL databases are not suited for hierarchical data
                        storage.
                      </p>
                    </li>
                    <li>
                      <p>
                        SQL databases have fixed or static or predefined schema.
                      </p>
                    </li>
                  </ul>
                </td>

                <td>
                  <ul className="p-2">
                    <li>
                      <p className="mt-3">
                        NoSQL databases Follows CAP(consistency, availability,
                        partition tolerance).
                      </p>
                    </li>
                    <li>
                      <p>NoSQL databases Horizontally scalable.</p>
                    </li>
                    <li>
                      <p>
                        NoSQL databases databases are not so good for complex
                        queries.
                      </p>
                    </li>
                    <li>
                      <p>
                        NoSQL databases are best suited for hierarchical data
                        storage..
                      </p>
                    </li>
                    <li>
                      <p>NoSQL databases have dynamic schema.</p>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pb-5">
          <h1 className="text-center blogs-big-text mt-5 mx-4">
            What is the purpose of JWT and how does it work?
          </h1>
          <div className="col-12 d-flex flex-column-reverse flex-md-row my-5 justify-content-between align-items-center flex-wrap">
            <div className="col-md-6 col-sm-1">
              <div className="ms-md-5 mx-4 mt-4">
                <p className="normal-text">
                  <strong>The Purpose Of jwt</strong> is to identify wether the
                  user accessing a website data is someone who is authorized. If
                  a user isnt authorized then it will be a great disaster for a
                  website if he found any valuable data. jwt add extra layer to
                  user authentication. so that only valid user can have the
                  access to read and write data.
                </p>
                <p className="normal-text">
                  <strong>how does JWT work</strong> jwt stand for json web
                  token. when a user login jwt generate a token which is sent to
                  client. the token is then stored in local storage or browser
                  cookies. the token has 3 part. Header , payload and signature.
                  Header store the algorithm which is used to decode the token.
                  payload is the data that is stored in the token. Finally the
                  signature which is how the server verifies the token.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-1">
              <img
                src={img04}
                className="shadow rounded-3 mt-4 img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
