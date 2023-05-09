import axios from "axios";

export const getPosts = async () => {
  axios
    .get("http://localhost:8000/get-posts")
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};

export const riskDetection = async (inputData) => {
  axios
    .post("http://localhost:8000/predict/risk-detection", inputData)
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};

export const mirrorDetetction = async (file) => {
  const formData = new FormData();
  formData.append("file", file); // replace file with your file object

  axios
    .post("http://localhost:8000/predict/mirror-images", formData)
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};
export const multiLineDetetction = async (file) => {
  const formData = new FormData();
  formData.append("file", file); // replace file with your file object

  axios
    .post("http://localhost:8000/predict/multi-line", formData)
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};
export const singleLineDetetction = async (file) => {
  const formData = new FormData();
  formData.append("file", file); // replace file with your file object

  axios
    .post("http://localhost:8000/predict/single-line", formData)
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};
export const misspelledDetetction = async (file) => {
  const formData = new FormData();
  formData.append("file", file); // replace file with your file object

  axios
    .post("http://localhost:8000/predict/miss-spelled", formData)
    .then((response) => {
      console.log(response.data); // handle response data here
    })
    .catch((error) => {
      console.log(error); // handle errors here
    });
};

// const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await getPosts();
//       setPosts(response.data);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
