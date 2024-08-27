import { Col, Container, Row } from "react-bootstrap"
import PostDetails from "../../components/PostDetails/PostDetails"

const PostDetailsPage = () => {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <PostDetails />
        </Col>
      </Row>
    </Container>
  )
}

export default PostDetailsPage