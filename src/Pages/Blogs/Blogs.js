import React from 'react';
import './Blogs.css';
import node1 from '../../../src/images/blogs/node.png';
import sql from '../../../src/images/blogs/sql.png';
import jwt from '../../../src/images/blogs/jwt.jpg';
import mongodb from '../../../src/images/blogs/mongodb.png'
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='blogs'>
            <PageTitle title={"blogs"}></PageTitle>
            <div className='container js-node'>
                <img className='w-75' src={node1} alt="" />
                <div className=' text-start'>
                    <h3>Difference between javascript and nodejs</h3>
                    <p>Following is the comparison table between JavaScript and Node JS.</p>
                    <table id="customers">
                        <tr>
                            <th>Javascript</th>
                            <th>NodeJS</th>
                        </tr>
                        <tr>
                            <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.	</td>
                            <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.	</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>

                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>Javascript is used in frontend development.	</td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                        <tr>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side.	</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>

                            <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                            <td>Nodejs is written in C, C++ and Javascript.</td>
                        </tr>
                        <tr>

                            <td>Javascript is used in frontend development.	</td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className=''>
                <img className='w-50' src={sql} alt="" />
                <div className='text-start container'>
                    <h3>Differences between sql and nosql databases.</h3>
                    <table id="customers">
                        <tr>
                            <th>SQL</th>
                            <th>NOSQL</th>
                        </tr>
                        <tr>
                            <td>Relation Database management system</td>
                            <td>Distributed Database management system</td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally Scalable</td>
                        </tr>
                        <tr>

                            <td>Fixed or predifined Schema</td>
                            <td>Dynamic Schema</td>
                        </tr>
                        <tr>
                            <td>Not Suitable for Hierarchical</td>
                            <td>Best Suitable for Hierarchical Data Storage</td>
                        </tr>
                        <tr>
                            <td>Can be Used for Complex Queries</td>
                            <td>Not Good for Complex Queries</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='jwt container'>
                <img className='w-75' src={jwt} alt="" />
                <div className=' text-start'>
                    <h3> The purpose of JWT and its work</h3>
                    <h4>The purpose of JWT</h4>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <h4>JWTs Works</h4>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        <p>When decoded, you will get two JSON strings:</p>

                        <p> 1. The header and the payload.
                            2. The signature.</p>
                        <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                    </p>
                </div>
            </div>
            <div className='container'>
                <img src={mongodb} alt="" />
                <div className='text-start'>
                    <p>Node.js is a rapidly growing technology that has been overtaking the world of server-side programming with surprising speed. MongoDB is a technology that’s revolutionizing database usage. Together, the two tools are a potent combination, thanks to the fact that they both employ JavaScript and JSON.</p>
                    <h6>Key features of MongoDB:</h6>
                    <p>
                        <ul>
                            <li>Full index support for high performance</li>
                            <li>Horizontally scalable and fault tolerant (distributed data storage/sharding)</li>
                            <li>Rich document based queries for easy readability</li>
                            <li>Replication and failover for high availability</li>
                            <li>Map/Reduce for aggregation</li>
                            <li>Supports Master-Slave replication</li>
                            <li>No joins nor transactions</li>
                            <li>No rigid schema, which makes it dynamic</li>
                            <li>Data represented in JSON / BSON</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;