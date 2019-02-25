var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var ss = new cordova.plugins.SecureStorage(
            function() {
                ss.get(
                  function(value) {
                    alert("Success");
                  },
                  function(error) {
                    alert(error);
                  },
                  "shared_key"
                );
            },
            function(error) {
                alert(error);
            },
            "testing", {
                android: {
                    packageName: "com.crypho.SecureStorageTestApp"
                }
            }
        );
    }
};

app.initialize();