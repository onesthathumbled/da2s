Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://da2s.netlify.app/' # Allow requests from any origin
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: false
    end
  end
  