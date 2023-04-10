sudo chown root beats/heartbeat/heartbeat.yml 
sudo chown root apm/apm-server.yml 
sudo chown root beats/metric/metricbeat.yml
sudo sysctl -w vm.max_map_count=262144

#https://forum.code.education/forum/topico/servico-do-elasticsearch-nao-sobe-351/