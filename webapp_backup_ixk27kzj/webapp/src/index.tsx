import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { Layout } from './components/Layout'
import { Homepage } from './pages/Homepage'
import { TourPage } from './pages/TourPage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Routes
app.get('/', (c) => {
  return c.html(
    <Layout title="Laenlammen Tila - Authentic Finnhorse Adventures in Lapland" lang="en">
      <Homepage />
    </Layout>
  )
})

app.get('/tours/aurora-ride', (c) => {
  return c.html(
    <Layout title="Aurora Ride - Laenlammen Tila" lang="en">
      <TourPage />
    </Layout>
  )
})

app.get('/about', (c) => {
  return c.html(
    <Layout title="About Us - Laenlammen Tila" lang="en">
      <AboutPage />
    </Layout>
  )
})

app.get('/blog', (c) => {
  return c.html(
    <Layout title="Blog - Laenlammen Tila" lang="en">
      <BlogPage />
    </Layout>
  )
})

app.get('/blog/winter-finnhorse-care', (c) => {
  return c.html(
    <Layout title="Winter Finnhorse Care - Laenlammen Tila Blog" lang="en">
      <BlogPostPage />
    </Layout>
  )
})

export default app
