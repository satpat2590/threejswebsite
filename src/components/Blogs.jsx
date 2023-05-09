import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #f0f0f0; // Feel free to change this color
`;

const ArticleButton = styled.button`
    background-color: #007BFF; // Change as per your theme
    color: white;
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
    
    &:hover {
        background-color: #0056b3;
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
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const Blogs = ({ articles }) => {
    return (
        <Container>
            <h1>My Blog Articles</h1>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Date Published</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Action</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <TableRow key={index}>
                            <TableCell>{article.datePublished}</TableCell>
                            <TableCell>{article.title}</TableCell>
                            <TableCell>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    <ArticleButton>Read</ArticleButton>
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Blogs;
