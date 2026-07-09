import { createPost } from "../action"

export default function page() {
  return (
    <>
    <form action={createPost}>
      <input name="title"/>
     <button type="submit">submit post</button>
    </form>
    </>
  )
}
