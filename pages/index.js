import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home({ posts }) {
	return (
		<div className="text-center">
			<Banner></Banner>
			<div>
				{posts?.map((post) => (
					<div key={post.id} className="card m-10 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">{post?.title}</h2>
              <p>{post?.body}</p>
						</div>
					</div>
				))}

        <Link href="/posts">

        <button className="btn btn-primary">
          see more
        </button>
        </Link>
			</div>
			<Footer></Footer>
		</div>
	);
}

// get static props
export const getStaticProps = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=3"
	);
	const data = await res.json();

	return {
		props: {
			posts: data,
		},
	};
};
