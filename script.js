 // HTML Tags Database
        const htmlTags = [
            { tag: 'html', category: 'Structure', description: 'The root element that wraps all content on the page', example: '&lt;html lang="en"&gt;<br>&nbsp;&nbsp;&lt;head&gt;...&lt;/head&gt;<br>&nbsp;&nbsp;&lt;body&gt;...&lt;/body&gt;<br>&lt;/html&gt;' },
            { tag: 'head', category: 'Structure', description: 'Contains metadata about the document', example: '&lt;head&gt;<br>&nbsp;&nbsp;&lt;title&gt;Page Title&lt;/title&gt;<br>&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;<br>&lt;/head&gt;' },
            { tag: 'body', category: 'Structure', description: 'Contains the visible page content', example: '&lt;body&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;p&gt;Content here&lt;/p&gt;<br>&lt;/body&gt;' },
            { tag: 'title', category: 'Metadata', description: 'Sets the document title shown in browser tab', example: '&lt;title&gt;My Amazing Website&lt;/title&gt;' },
            { tag: 'meta', category: 'Metadata', description: 'Provides metadata about the HTML document', example: '&lt;meta charset="UTF-8"&gt;<br>&lt;meta name="viewport" content="width=device-width"&gt;' },
            { tag: 'link', category: 'Metadata', description: 'Links external resources like CSS files', example: '&lt;link rel="stylesheet" href="styles.css"&gt;' },
            { tag: 'script', category: 'Metadata', description: 'Embeds or references JavaScript code', example: '&lt;script src="app.js"&gt;&lt;/script&gt;<br>&lt;script&gt;console.log("Hello");&lt;/script&gt;' },
            { tag: 'h1', category: 'Headings', description: 'Main heading (largest)', example: '&lt;h1&gt;Main Page Title&lt;/h1&gt;' },
            { tag: 'h2', category: 'Headings', description: 'Secondary heading', example: '&lt;h2&gt;Section Title&lt;/h2&gt;' },
            { tag: 'h3', category: 'Headings', description: 'Tertiary heading', example: '&lt;h3&gt;Subsection Title&lt;/h3&gt;' },
            { tag: 'h4', category: 'Headings', description: 'Fourth-level heading', example: '&lt;h4&gt;Sub-subsection&lt;/h4&gt;' },
            { tag: 'h5', category: 'Headings', description: 'Fifth-level heading', example: '&lt;h5&gt;Minor Heading&lt;/h5&gt;' },
            { tag: 'h6', category: 'Headings', description: 'Smallest heading', example: '&lt;h6&gt;Tiny Heading&lt;/h6&gt;' },
            { tag: 'p', category: 'Text', description: 'Paragraph of text', example: '&lt;p&gt;This is a paragraph with some text content.&lt;/p&gt;' },
            { tag: 'br', category: 'Text', description: 'Line break (self-closing)', example: 'First line&lt;br&gt;Second line' },
            { tag: 'hr', category: 'Text', description: 'Horizontal rule/divider (self-closing)', example: '&lt;p&gt;Above&lt;/p&gt;&lt;hr&gt;&lt;p&gt;Below&lt;/p&gt;' },
            { tag: 'strong', category: 'Text', description: 'Important text (bold)', example: '&lt;strong&gt;This is important!&lt;/strong&gt;' },
            { tag: 'em', category: 'Text', description: 'Emphasized text (italic)', example: '&lt;em&gt;This is emphasized&lt;/em&gt;' },
            { tag: 'b', category: 'Text', description: 'Bold text (presentational)', example: '&lt;b&gt;Bold text&lt;/b&gt;' },
            { tag: 'i', category: 'Text', description: 'Italic text (presentational)', example: '&lt;i&gt;Italic text&lt;/i&gt;' },
            { tag: 'u', category: 'Text', description: 'Underlined text', example: '&lt;u&gt;Underlined text&lt;/u&gt;' },
            { tag: 'small', category: 'Text', description: 'Smaller text', example: '&lt;small&gt;Fine print text&lt;/small&gt;' },
            { tag: 'mark', category: 'Text', description: 'Highlighted text', example: '&lt;mark&gt;Highlighted text&lt;/mark&gt;' },
            { tag: 'del', category: 'Text', description: 'Deleted text (strikethrough)', example: '&lt;del&gt;This was removed&lt;/del&gt;' },
            { tag: 'ins', category: 'Text', description: 'Inserted text (underlined)', example: '&lt;ins&gt;This was added&lt;/ins&gt;' },
            { tag: 'sub', category: 'Text', description: 'Subscript text', example: 'H&lt;sub&gt;2&lt;/sub&gt;O' },
            { tag: 'sup', category: 'Text', description: 'Superscript text', example: 'E=mc&lt;sup&gt;2&lt;/sup&gt;' },
            { tag: 'a', category: 'Links', description: 'Hyperlink to other pages or resources', example: '&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;' },
            { tag: 'img', category: 'Media', description: 'Embeds an image (self-closing)', example: '&lt;img src="photo.jpg" alt="Description"&gt;' },
            { tag: 'audio', category: 'Media', description: 'Embeds audio content', example: '&lt;audio controls&gt;&lt;source src="audio.mp3"&gt;&lt;/audio&gt;' },
            { tag: 'video', category: 'Media', description: 'Embeds video content', example: '&lt;video controls&gt;&lt;source src="video.mp4"&gt;&lt;/video&gt;' },
            { tag: 'div', category: 'Layout', description: 'Generic container (block-level)', example: '&lt;div class="container"&gt;Content here&lt;/div&gt;' },
            { tag: 'span', category: 'Layout', description: 'Generic container (inline)', example: '&lt;span class="highlight"&gt;Inline text&lt;/span&gt;' },
            { tag: 'header', category: 'Layout', description: 'Header section of page or article', example: '&lt;header&gt;&lt;h1&gt;Site Title&lt;/h1&gt;&lt;/header&gt;' },
            { tag: 'nav', category: 'Layout', description: 'Navigation links section', example: '&lt;nav&gt;&lt;a href="/"&gt;Home&lt;/a&gt; &lt;a href="/about"&gt;About&lt;/a&gt;&lt;/nav&gt;' },
            { tag: 'main', category: 'Layout', description: 'Main content area', example: '&lt;main&gt;&lt;article&gt;Main content&lt;/article&gt;&lt;/main&gt;' },
            { tag: 'section', category: 'Layout', description: 'Thematic grouping of content', example: '&lt;section&gt;&lt;h2&gt;About Us&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/section&gt;' },
            { tag: 'article', category: 'Layout', description: 'Independent, self-contained content', example: '&lt;article&gt;&lt;h2&gt;Blog Post&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/article&gt;' },
            { tag: 'aside', category: 'Layout', description: 'Sidebar or related content', example: '&lt;aside&gt;&lt;h3&gt;Related Links&lt;/h3&gt;&lt;ul&gt;...&lt;/ul&gt;&lt;/aside&gt;' },
            { tag: 'footer', category: 'Layout', description: 'Footer section of page or article', example: '&lt;footer&gt;&copy; 2024 My Website&lt;/footer&gt;' },
            { tag: 'ul', category: 'Lists', description: 'Unordered (bulleted) list', example: '&lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item 2&lt;/li&gt;&lt;/ul&gt;' },
            { tag: 'ol', category: 'Lists', description: 'Ordered (numbered) list', example: '&lt;ol&gt;&lt;li&gt;First&lt;/li&gt;&lt;li&gt;Second&lt;/li&gt;&lt;/ol&gt;' },
            { tag: 'li', category: 'Lists', description: 'List item', example: '&lt;li&gt;List item content&lt;/li&gt;' },
            { tag: 'dl', category: 'Lists', description: 'Description list', example: '&lt;dl&gt;&lt;dt&gt;Term&lt;/dt&gt;&lt;dd&gt;Definition&lt;/dd&gt;&lt;/dl&gt;' },
            { tag: 'dt', category: 'Lists', description: 'Description term', example: '&lt;dt&gt;HTML&lt;/dt&gt;' },
            { tag: 'dd', category: 'Lists', description: 'Description definition', example: '&lt;dd&gt;HyperText Markup Language&lt;/dd&gt;' },
            { tag: 'table', category: 'Tables', description: 'Table container', example: '&lt;table&gt;&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;John&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;' },
            { tag: 'tr', category: 'Tables', description: 'Table row', example: '&lt;tr&gt;&lt;td&gt;Cell 1&lt;/td&gt;&lt;td&gt;Cell 2&lt;/td&gt;&lt;/tr&gt;' },
            { tag: 'th', category: 'Tables', description: 'Table header cell', example: '&lt;th&gt;Column Header&lt;/th&gt;' },
            { tag: 'td', category: 'Tables', description: 'Table data cell', example: '&lt;td&gt;Cell data&lt;/td&gt;' },
            { tag: 'thead', category: 'Tables', description: 'Table header group', example: '&lt;thead&gt;&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;' },
            { tag: 'tbody', category: 'Tables', description: 'Table body group', example: '&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Data&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;' },
            { tag: 'tfoot', category: 'Tables', description: 'Table footer group', example: '&lt;tfoot&gt;&lt;tr&gt;&lt;td&gt;Total&lt;/td&gt;&lt;/tr&gt;&lt;/tfoot&gt;' },
            { tag: 'form', category: 'Forms', description: 'Form for user input', example: '&lt;form action="/submit" method="post"&gt;...&lt;/form&gt;' },
            { tag: 'input', category: 'Forms', description: 'Input field (self-closing)', example: '&lt;input type="text" name="username" placeholder="Enter name"&gt;' },
            { tag: 'textarea', category: 'Forms', description: 'Multi-line text input', example: '&lt;textarea rows="4" cols="50"&gt;Default text&lt;/textarea&gt;' },
            { tag: 'button', category: 'Forms', description: 'Clickable button', example: '&lt;button type="submit"&gt;Submit Form&lt;/button&gt;' },
            { tag: 'select', category: 'Forms', description: 'Dropdown selection list', example: '&lt;select&gt;&lt;option&gt;Option 1&lt;/option&gt;&lt;option&gt;Option 2&lt;/option&gt;&lt;/select&gt;' },
            { tag: 'option', category: 'Forms', description: 'Option in a select dropdown', example: '&lt;option value="red"&gt;Red&lt;/option&gt;' },
            { tag: 'label', category: 'Forms', description: 'Label for form controls', example: '&lt;label for="email"&gt;Email:&lt;/label&gt;' },
            { tag: 'fieldset', category: 'Forms', description: 'Groups related form controls', example: '&lt;fieldset&gt;&lt;legend&gt;Personal Info&lt;/legend&gt;...&lt;/fieldset&gt;' },
            { tag: 'legend', category: 'Forms', description: 'Caption for fieldset', example: '&lt;legend&gt;Contact Information&lt;/legend&gt;' },
            { tag: 'blockquote', category: 'Content', description: 'Extended quotation', example: '&lt;blockquote&gt;&lt;p&gt;"To be or not to be..."&lt;/p&gt;&lt;/blockquote&gt;' },
            { tag: 'q', category: 'Content', description: 'Inline quotation', example: 'He said &lt;q&gt;Hello world&lt;/q&gt; to everyone.' },
            { tag: 'cite', category: 'Content', description: 'Citation of work', example: '&lt;cite&gt;The Great Gatsby&lt;/cite&gt; by F. Scott Fitzgerald' },
            { tag: 'code', category: 'Content', description: 'Inline code', example: 'Use &lt;code&gt;console.log()&lt;/code&gt; to debug.' },
            { tag: 'pre', category: 'Content', description: 'Preformatted text (preserves whitespace)', example: '&lt;pre&gt;function hello() {\n    console.log("Hi");\n}&lt;/pre&gt;' },
            { tag: 'kbd', category: 'Content', description: 'Keyboard input', example: 'Press &lt;kbd&gt;Ctrl+C&lt;/kbd&gt; to copy.' },
            { tag: 'samp', category: 'Content', description: 'Sample output', example: '&lt;samp&gt;Error: File not found&lt;/samp&gt;' },
            { tag: 'var', category: 'Content', description: 'Variable in math or programming', example: 'The variable &lt;var&gt;x&lt;/var&gt; equals 5.' },
            { tag: 'time', category: 'Content', description: 'Date or time', example: '&lt;time datetime="2024-01-01"&gt;New Year\'s Day&lt;/time&gt;' },
            { tag: 'address', category: 'Content', description: 'Contact information', example: '&lt;address&gt;123 Main St&lt;br&gt;City, State 12345&lt;/address&gt;' }
        ];

        // App state
        let currentIndex = 0;
        let isFlipped = false;
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let shuffledTags = [...htmlTags];

        // Initialize the app
        $(document).ready(function() {
            shuffleArray(shuffledTags);
            updateDisplay();
            updateStats();
        });

        // Event listeners
        $('#flashcard').click(function() {
            flipCard();
        });

        $('#nextBtn').click(function() {
            nextCard();
        });

        $('#prevBtn').click(function() {
            previousCard();
        });

        $('#correctBtn').click(function() {
            markCorrect();
        });

        $('#wrongBtn').click(function() {
            markWrong();
        });

        $('#shuffleBtn').click(function() {
            shuffleCards();
        });

        $('#resetBtn').click(function() {
            resetProgress();
        });

        // Functions
        function flipCard() {
            isFlipped = !isFlipped;
            $('#flashcard').toggleClass('flipped');
        }

        function nextCard() {
            if (currentIndex < shuffledTags.length - 1) {
                currentIndex++;
                resetCardState();
                updateDisplay();
                updateStats();
            }
        }

        function previousCard() {
            if (currentIndex > 0) {
                currentIndex--;
                resetCardState();
                updateDisplay();
                updateStats();
            }
        }

        function resetCardState() {
            if (isFlipped) {
                isFlipped = false;
                $('#flashcard').removeClass('flipped');
            }
        }

        function markCorrect() {
            correctAnswers++;
            updateStats();
            setTimeout(nextCard, 500);
        }

        function markWrong() {
            wrongAnswers++;
            updateStats();
            setTimeout(nextCard, 500);
        }

        function shuffleCards() {
            shuffleArray(shuffledTags);
            currentIndex = 0;
            resetCardState();
            updateDisplay();
            updateStats();
        }

        function resetProgress() {
            correctAnswers = 0;
            wrongAnswers = 0;
            currentIndex = 0;
            resetCardState();
            updateDisplay();
            updateStats();
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function updateDisplay() {
            const currentTag = shuffledTags[currentIndex];
            $('#tagName').html(`&lt;${currentTag.tag}&gt;`);
            $('#categoryBadge').text(currentTag.category);
            $('#tagDescription').text(currentTag.description);
            $('#tagExample').html(currentTag.example);
        }

        function updateStats() {
            $('#currentCard').text(currentIndex + 1);
            $('#totalCards').text(shuffledTags.length);
            $('#correctCount').text(correctAnswers);
            $('#wrongCount').text(wrongAnswers);
            
            const progress = ((currentIndex + 1) / shuffledTags.length) * 100;
            $('#progressBar').css('width', progress + '%');
        }

        // Keyboard navigation
        $(document).keydown(function(e) {
            switch(e.which) {
                case 37: // left arrow
                    previousCard();
                    break;
                case 39: // right arrow
                    nextCard();
                    break;
                case 32: // spacebar
                    e.preventDefault();
                    flipCard();
                    break;
                case 49: // number 1
                    markCorrect();
                    break;
                case 50: // number 2
                    markWrong();
                    break;
            }
        });