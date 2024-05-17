Create a topic :-

bin/kafka-topics.sh --create --topic topic-example-events --bootstrap-server localhost:9092
(file responsible for creating event) --create (flag) --topic (flag) followed by topic-name --bootstrap-server (flag) followed by kafka running server URL


Producing into that topic in kafka server :-
bin/kafka-console-producer.sh --topic topic-example-events --bootstrap-server localhost:9092
(file responsible for putting producer's event into the kafka) --topic (flag) followed by topic-name-into-which-we-are-producing --bootstrap-server (flag) followed by kafka running server URL

Consuming those event produced by producer :-
bin/kafka-console-consumer.sh --topic topic-example-events --from-beginning --bootstrap-server localhost:9092
(file responsible for creating event) --topic (flag) followed by topic-name-into-which-we-are-producing --bootstrap-server (flag) followed by kafka running server URL
