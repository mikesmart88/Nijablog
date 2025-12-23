import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PopularPostPage from "../Pages/PopularPostPage";
import BiographPostPage from "../Pages/BiographPostPage";
import BusinessPostPage from "../Pages/BusinessPostPage";
import EntertainmentPostPage from "../Pages/EntertainmentPostPage";
import FinancePostPage from "../Pages/FinancePostPage";
import InternationalNewsPostPage from "../Pages/InternationalPostPage";
import PoliticPostPage from "../Pages/PoliticPostPage";
import SportPostPage from "../Pages/SportPostPage";
import TechnologyPostPage from "../Pages/TechnologyPostPage";

import GeneralLayouts from "../layouts/GeneralLayout";
import NewsPostPage from "../Pages/NewsPostPage";



export default function Routers() {
    return(
        <Routes>
            <Route element={<GeneralLayouts />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/popular/" element={<PopularPostPage />} />
            <Route path="/posts/biographies/" element={<BiographPostPage />} />
            <Route path="/posts/business/" element={<BusinessPostPage />} />
            <Route path="/posts/Entertainments/" element={<EntertainmentPostPage />} />
            <Route path="/posts/Finance/" element={<FinancePostPage />} />
            <Route path="/posts/news/international/" element={<InternationalNewsPostPage />} />
            <Route path="/posts/news/" element={<NewsPostPage />} />
            <Route path="/posts/politics/" element={<PoliticPostPage />} />
            <Route path="/posts/sports/" element={<SportPostPage />} />
            <Route path="/posts/technology/" element={<TechnologyPostPage />} />
        </Route>
        </Routes>
    )
}