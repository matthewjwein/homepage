import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

interface ProjectProps {
    id: number;
    title: string;
    tags: string[];
}

const Post: React.FC<ProjectProps> = ({ id, title, tags }) => {
    return (
        <Card className="project-card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/project/${id}`}>Coming Soon</Link>
            </Card.Body>
        </Card>
    );
};

export default Post;