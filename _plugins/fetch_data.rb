require 'net/http'
require 'json'

module FetchData
  class Generator < Jekyll::Generator
    def generate(site)
      # Modify the API endpoint and authentication as needed
      api_url = 'https://jsonplaceholder.typicode.com/posts'
      # auth_token = 'your_auth_token' # Replace with your authentication token

      uri = URI(api_url)
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true if uri.scheme == 'https'

      request = Net::HTTP::Get.new(uri)
      # request['Authorization'] = "Bearer #{auth_token}"

      response = http.request(request)

      if response.code == '200'
        data = JSON.parse(response.body)
        site.data['api_data'] = data
      else
        Jekyll.logger.warn "Failed to fetch API data"
      end
    end
  end
end
