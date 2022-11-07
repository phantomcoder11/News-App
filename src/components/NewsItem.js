import React from "react";

export default function NewsItem(props) {
  return (
    <div>
      <div className="card" style={{ width: "90%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {props.source.name}
          </span>
        </div>
        <img
          src={props.imageUrl}
          alt="Image Not Loaded"
          style={{ height: "25vh", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.newsUrl} target=" " className="btn btn-sm btn-primary">
            Read More
          </a>
          <p className="card-text">
            {props.author && (
              <small className="text-muted my-3">Author: {props.author}</small>
            )}
            <br />
            <small className="text-muted">
              Published at {new Date(props.publishedAt).toUTCString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
