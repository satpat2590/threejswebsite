import React from 'react';
import styled from "styled-components";
import Navbar from './Navbar.jsx'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #000000; // Feel free to change this color
`;

const Header = styled.h1`
    color: white;
`;

const ArticleButton = styled.button`
    background-color: #FFFFF; // Change as per your theme
    color: black;
    font-style: bold;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-left: 2rem;
    &:hover {
        background-color: #0b340b;
    }
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 80%;
    text-align: left;
    margin-top: 50px;
`;

const TableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
`;

const TableRow = styled.tr`

`;

const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    color: white;
`;

const Blogs = ({ articles }) => {
    return (
        <>
        <Container>
            <Header>Ramblings!</Header>
            <Table>
                <tbody>
                    {articles.map((article, index) => (
                        <TableRow key={index}>
                            <TableCell>{article.datePublished}</TableCell>
                            <TableCell>{article.title}</TableCell>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                <ArticleButton>Read</ArticleButton>
                            </a>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    )
}

export default Blogs;
