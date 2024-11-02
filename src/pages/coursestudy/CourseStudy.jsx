import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <div className="left-div">
          <img src={`${server}/${course.image}`} alt="" width={300} />
          <h2>{course.title}</h2>
          <Link to={`/lectures/${course._id}`}>
            <h3>Lectures</h3>
          </Link>
          </div>
          
          <div className="right-div">
          <p>{course.description} </p>
          <h5>Instructed by - <span>{course.createdBy}</span></h5>
          <h5>Duration - <span>{course.duration} weeks</span></h5>
        </div>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
