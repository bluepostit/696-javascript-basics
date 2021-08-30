# CRUD with arrays
drinks = ['long island iced tea', '404', 'black russian', 'pina colada']

# C-reate
drinks << 'negroni'

# R-ead
puts drinks[1]

# U-pdate
drinks[3] = 'martini'

# D-elete
drinks.delete_at(0)


# Iteration
drinks.each do |drink|
  puts "🍸 #{drink}"
end
