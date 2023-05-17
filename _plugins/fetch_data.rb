require 'net/http'
require 'json'

module FetchData
  class Generator < Jekyll::Generator
    def generate(site)
      # auth_token = process.env.JOBS_API_TOKEN # Replace with your authentication token
      # auth_token = '5e21833f-f5ea-4ce7-7a5c-2bfb537ca8bd'
      auth_token = ENV['JOBS_API_TOKEN']

      # Iterate through each job post
      site.jobs.docs.each do |job|
        # Make API request for each job post and retrieve JSON data
        # uri = URI("https://workml.io/v1/jobs/{id}") # Modify the URL pattern according to your API
        # uri = URI("https://jsonplaceholder.typicode.com/todos/1")
        uri = URI("https://workml.io/v1/jobs/#{job.data['id']}") # Modify the URL pattern according to your API
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true # Enable SSL if needed

        request = Net::HTTP::Get.new(uri)
        request['Authorization'] = "Bearer #{auth_token}" # Add the authentication token as a Bearer token

        response = http.request(request)

        if response.code == '200'
          data = JSON.parse(response.body)
          job.data['api_data'] = data
        else
          Jekyll.logger.warn "Failed to fetch API data for job post: #{id}"
        end
      end
    end
  end
end
