require 'net/http'

module FetchData
  class Generator < Jekyll::Generator
    def generate(site)
      # Make API request and retrieve JSON data
      uri = URI('https://jsonplaceholder.typicode.com/todos/1')
      response = Net::HTTP.get(uri)

      # Inject JSON data into site payload
      site.data['api_data'] = response
    end
  end
end
