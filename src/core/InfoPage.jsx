import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <Layout
            title="Influence & Lobbying"
            description={`Take a look at influence money below`}
            className="container-fluid"
        >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Ranked Sectors</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        At the top level are 13 sectors — ten covering business
                        groups and one each for "labor,"
                        "ideological/single-issues," and "other."
                    </h6>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sector</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    {" "}
                                    <Link to="https://www.opensecrets.org/federal-lobbying/sectors/summary?cycle=2019&id=H">
                                        Health
                                    </Link>
                                </td>
                                <td>$593,690,562</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>
                                    {" "}
                                    <Link to="/https://www.opensecrets.org/federal-lobbying/sectors/summary?cycle=2019&id=F">
                                        Finance/Insur/RealEst
                                    </Link>
                                </td>
                                <td>$499,178,178</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>
                                    <Link to="https://www.opensecrets.org/federal-lobbying/sectors/summary?cycle=2019&id=N">
                                        Misc Business
                                    </Link>
                                </td>
                                <td>$493,538,239</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>
                                    {" "}
                                    <Link href="https://www.opensecrets.org/federal-lobbying/sectors/summary?cycle=2019&id=B">
                                        Communic/Electronics{" "}
                                    </Link>
                                </td>
                                <td>$434,596,224</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>
                                    {" "}
                                    <Link to="https://www.opensecrets.org/federal-lobbying/sectors/summary?cycle=2019&id=E">
                                        Energy/Nat Resource
                                    </Link>
                                </td>
                                <td>$318,411,519</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Top Spenders</h5>

                    <h6 class="card-subtitle mb-2 text-muted">
                        Whether they do their own lobbying or hire it out to
                        DC’s infamous K Street firms, these organizations spend
                        the most trying to influence government policy.
                    </h6>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Lobbing Client</th>
                                <th scope="col">Total Spent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>US Chamber of Commerce</td>
                                <td>$77,245,000</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>United Technologies</td>
                                <td>$12,750,000</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>
                                    Pharmaceutical Research & Manufacturers of
                                    America
                                </td>
                                <td>$29,291,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h5 class="card-title">Top Issues</h5>

                    <h6 class="card-subtitle mb-2 text-muted">
                        See how many companies, trade groups, labor unions and
                        other organizations spent money lobbying on the most
                        popular issues.
                    </h6>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Issue</th>
                                <th scope="col">No. of Clients</th>
                                <th scope="col">No. of Lobbyists</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Fed Budget & Appropriations</td>
                                <td>3,065</td>
                                <td>4,322</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Health Issues</td>
                                <td>2,111</td>
                                <td>3,912</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Taxes</td>
                                <td>1,865</td>
                                <td>4,216</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default Info;
