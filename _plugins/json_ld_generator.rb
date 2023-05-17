module JsonLdGenerator
  class Generator < Jekyll::Generator
    def generate(site)
      site.posts.docs.each do |post|
        json_data = post.data.to_json

        script_tag = <<~TAG
          <script type="application/ld+json">
            #{json_data}
          </script>
        TAG

        post.data['json_ld_script'] = script_tag
      end
    end
  end
end
